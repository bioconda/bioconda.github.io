:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectrseqtools'
.. highlight: bash

spectrseqtools
==============

.. conda:recipe:: spectrseqtools
   :replaces_section_title:
   :noindex:

   SpectrSeqTools is a fully automatic analysis platform for sequencing small RNA molecules including
   post translational modifications measured via LC\-MS\/MS data.


   :homepage: https://github.com/spectrseq/spectrseqtools
   :license: GPL-3.0-only
   :recipe: /`spectrseqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrseqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrseqtools/meta.yaml>`_

   


.. conda:package:: spectrseqtools

   |downloads_spectrseqtools| |docker_spectrseqtools|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends on altair: ``>=5.4.1,<6.0``
   :depends on clr_loader: ``>=0.2.7.post0,<0.3``
   :depends on dbscan1d: ``>=0.2.3,<0.3``
   :depends on loguru: ``>=0.7.2,<0.8``
   :depends on mono: ``>=6.12.0.199,<7``
   :depends on ms_deisotope: ``>=0.0.60,<0.1``
   :depends on numpy: ``>=2.2.3,<3.0``
   :depends on platformdirs: ``>=4.3.8,<5.0``
   :depends on polars: ``>=1.9.0,<2.0``
   :depends on pulp: ``>=2.3.0,<3.0``
   :depends on python: ``>=3.12,<3.14``
   :depends on pythonnet: ``>=3.0.5,<4.0``
   :depends on pyyaml: ``>=6.0.2,<7.0``
   :depends on scikit-learn: ``>=1.7.2,<2.0``
   :depends on tqdm: ``>=4.67.1,<5.0``
   :depends on typed-argument-parser: ``>=1.10.1,<2.0``

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

    pixi global install spectrseqtools

to add into an existing workspace instead, run::

    pixi add spectrseqtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spectrseqtools

Alternatively, to install into a new environment, run::

    conda create -n envname spectrseqtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spectrseqtools:<tag>

(see `spectrseqtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spectrseqtools| image:: https://img.shields.io/conda/dn/bioconda/spectrseqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/spectrseqtools
   :alt:   (downloads)
.. |docker_spectrseqtools| image:: https://quay.io/repository/biocontainers/spectrseqtools/status
   :target: https://quay.io/repository/biocontainers/spectrseqtools
.. _`spectrseqtools/tags`: https://quay.io/repository/biocontainers/spectrseqtools?tab=tags


.. raw:: html

    <script>
        var package = "spectrseqtools";
        var versions = ["0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectrseqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectrseqtools/README.html