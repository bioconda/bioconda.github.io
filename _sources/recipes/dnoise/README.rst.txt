:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnoise'
.. highlight: bash

dnoise
======

.. conda:recipe:: dnoise
   :replaces_section_title:
   :noindex:

   Denoise sequence data sets from Illumina using distance corrected according to the entropy of each codon position

   :homepage: https://github.com/adriantich/DnoisE
   :license: GPL / GPL-3.0-only
   :recipe: /`dnoise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnoise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnoise/meta.yaml>`_

   


.. conda:package:: dnoise

   |downloads_dnoise| |docker_dnoise|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends on numpy: ``>=1.21``
   :depends on pandas: ``2.0.*``
   :depends on python: ``>=3.8``
   :depends on python-levenshtein: ``0.21.*``
   :depends on tqdm: 

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

    pixi global install dnoise

to add into an existing workspace instead, run::

    pixi add dnoise

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dnoise

Alternatively, to install into a new environment, run::

    conda create -n envname dnoise

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dnoise:<tag>

(see `dnoise/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dnoise| image:: https://img.shields.io/conda/dn/bioconda/dnoise.svg?style=flat
   :target: https://anaconda.org/bioconda/dnoise
   :alt:   (downloads)
.. |docker_dnoise| image:: https://quay.io/repository/biocontainers/dnoise/status
   :target: https://quay.io/repository/biocontainers/dnoise
.. _`dnoise/tags`: https://quay.io/repository/biocontainers/dnoise?tab=tags


.. raw:: html

    <script>
        var package = "dnoise";
        var versions = ["1.4.2","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnoise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnoise/README.html