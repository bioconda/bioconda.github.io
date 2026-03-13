:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagdust2'
.. highlight: bash

tagdust2
========

.. conda:recipe:: tagdust2
   :replaces_section_title:
   :noindex:

   Tool to extract high confidence reads from sequencing data

   :homepage: https://github.com/aradar46/tagdust
   :license: GPL-3.0-only
   :recipe: /`tagdust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagdust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagdust2/meta.yaml>`_

   TagDust2 filters NGS reads using HMMs\, removes artifacts\, and can simulate reads.



.. conda:package:: tagdust2

   |downloads_tagdust2| |docker_tagdust2|

   :versions:
      
      

      ``2.33.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on pthread-stubs: 

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

    pixi global install tagdust2

to add into an existing workspace instead, run::

    pixi add tagdust2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tagdust2

Alternatively, to install into a new environment, run::

    conda create -n envname tagdust2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tagdust2:<tag>

(see `tagdust2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tagdust2| image:: https://img.shields.io/conda/dn/bioconda/tagdust2.svg?style=flat
   :target: https://anaconda.org/bioconda/tagdust2
   :alt:   (downloads)
.. |docker_tagdust2| image:: https://quay.io/repository/biocontainers/tagdust2/status
   :target: https://quay.io/repository/biocontainers/tagdust2
.. _`tagdust2/tags`: https://quay.io/repository/biocontainers/tagdust2?tab=tags


.. raw:: html

    <script>
        var package = "tagdust2";
        var versions = ["2.33.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagdust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagdust2/README.html