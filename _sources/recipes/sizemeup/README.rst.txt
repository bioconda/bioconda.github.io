:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sizemeup'
.. highlight: bash

sizemeup
========

.. conda:recipe:: sizemeup
   :replaces_section_title:
   :noindex:

   A simple tool to determine the genome size of an organism

   :homepage: https://github.com/rpetit3/sizemeup
   :license: MIT
   :recipe: /`sizemeup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sizemeup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sizemeup/meta.yaml>`_

   


.. conda:package:: sizemeup

   |downloads_sizemeup| |docker_sizemeup|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``

      

   
   :depends on bactopia-py: ``>=1.2.1``
   :depends on python: ``>=3.7``
   :depends on requests: 
   :depends on rich-click: ``>=1.6.0``

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

    pixi global install sizemeup

to add into an existing workspace instead, run::

    pixi add sizemeup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sizemeup

Alternatively, to install into a new environment, run::

    conda create -n envname sizemeup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sizemeup:<tag>

(see `sizemeup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sizemeup| image:: https://img.shields.io/conda/dn/bioconda/sizemeup.svg?style=flat
   :target: https://anaconda.org/bioconda/sizemeup
   :alt:   (downloads)
.. |docker_sizemeup| image:: https://quay.io/repository/biocontainers/sizemeup/status
   :target: https://quay.io/repository/biocontainers/sizemeup
.. _`sizemeup/tags`: https://quay.io/repository/biocontainers/sizemeup?tab=tags


.. raw:: html

    <script>
        var package = "sizemeup";
        var versions = ["1.3.0","1.2.3","1.2.2","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sizemeup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sizemeup/README.html