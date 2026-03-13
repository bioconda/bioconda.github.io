:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jobtree'
.. highlight: bash

jobtree
=======

.. conda:recipe:: jobtree
   :replaces_section_title:
   :noindex:

   Python based pipeline management software for clusters that makes running recursive and dynamically scheduled computations straightforward

   :homepage: https://github.com/benedictpaten/jobTree
   :license: MIT
   :recipe: /`jobtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jobtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jobtree/meta.yaml>`_

   


.. conda:package:: jobtree

   |downloads_jobtree| |docker_jobtree|

   :versions:
      
      

      ``09.04.2017-2``,  ``3.0.3-1``

      

   
   :depends on python: ``2.7.*``
   :depends on sonlib: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install jobtree

to add into an existing workspace instead, run::

    pixi add jobtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jobtree

Alternatively, to install into a new environment, run::

    conda create -n envname jobtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jobtree:<tag>

(see `jobtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jobtree| image:: https://img.shields.io/conda/dn/bioconda/jobtree.svg?style=flat
   :target: https://anaconda.org/bioconda/jobtree
   :alt:   (downloads)
.. |docker_jobtree| image:: https://quay.io/repository/biocontainers/jobtree/status
   :target: https://quay.io/repository/biocontainers/jobtree
.. _`jobtree/tags`: https://quay.io/repository/biocontainers/jobtree?tab=tags


.. raw:: html

    <script>
        var package = "jobtree";
        var versions = ["09.04.2017","3.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jobtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jobtree/README.html