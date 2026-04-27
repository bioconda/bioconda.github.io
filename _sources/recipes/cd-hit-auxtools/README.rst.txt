:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cd-hit-auxtools'
.. highlight: bash

cd-hit-auxtools
===============

.. conda:recipe:: cd-hit-auxtools
   :replaces_section_title:
   :noindex:

   Clusters and compares protein or nucleotide sequences

   :homepage: https://github.com/weizhongli/cdhit
   :license: GPLv2
   :recipe: /`cd-hit-auxtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit-auxtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit-auxtools/meta.yaml>`_

   


.. conda:package:: cd-hit-auxtools

   |downloads_cd-hit-auxtools| |docker_cd-hit-auxtools|

   :versions:
      
      

      ``4.8.1-4``,  ``4.8.1-3``,  ``4.8.1-2``,  ``4.8.1-1``,  ``4.8.1-0``,  ``4.6.8-2``,  ``4.6.8-1``,  ``4.6.8-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install cd-hit-auxtools

to add into an existing workspace instead, run::

    pixi add cd-hit-auxtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cd-hit-auxtools

Alternatively, to install into a new environment, run::

    conda create -n envname cd-hit-auxtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cd-hit-auxtools:<tag>

(see `cd-hit-auxtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cd-hit-auxtools| image:: https://img.shields.io/conda/dn/bioconda/cd-hit-auxtools.svg?style=flat
   :target: https://anaconda.org/bioconda/cd-hit-auxtools
   :alt:   (downloads)
.. |docker_cd-hit-auxtools| image:: https://quay.io/repository/biocontainers/cd-hit-auxtools/status
   :target: https://quay.io/repository/biocontainers/cd-hit-auxtools
.. _`cd-hit-auxtools/tags`: https://quay.io/repository/biocontainers/cd-hit-auxtools?tab=tags


.. raw:: html

    <script>
        var package = "cd-hit-auxtools";
        var versions = ["4.8.1","4.8.1","4.8.1","4.8.1","4.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cd-hit-auxtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cd-hit-auxtools/README.html