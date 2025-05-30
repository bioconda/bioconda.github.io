:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ionquant'
.. highlight: bash

ionquant
========

.. conda:recipe:: ionquant
   :replaces_section_title:
   :noindex:

   A label free quantification tool

   :homepage: https://github.com/Nesvilab/IonQuant
   :license: Academic License
   :recipe: /`ionquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ionquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ionquant/meta.yaml>`_
   :links: biotools: :biotools:`fragpipe`, doi: :doi:`10.1074/mcp.TIR120.002048`

   IonQuant is a fast and comprehensive tool for MS1 precursor intensity\-based quantification for timsTOF PASEF DDA and non\-timsTOF \(e.g.\, Orbitrap\) data.
   It enables label\-free quantification with false discovery \(FDR\) controlled match\-between\-runs \(MBR\).
   It can also be used for quantification in labelling\-based experiments such as those involving SILAC\, dimethyl\, or similar labelling strategies.

   IonQuant is available freely for academic research and educational purposes only\, in accordance with the terms at https\:\/\/msfragger.arsci.com\/upgrader\/LICENSE\-ACADEMIC.pdf.



.. conda:package:: ionquant

   |downloads_ionquant| |docker_ionquant|

   :versions:
      
      

      ``1.11.9-0``,  ``1.10.27-0``,  ``1.10.12-1``,  ``1.10.12-0``

      

   
   :depends openjdk: ``>=11``
   :depends python: ``3.11.*``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ionquant

   and update with::

      mamba update ionquant

  To create a new environment, run::

      mamba create --name myenvname ionquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ionquant:<tag>

   (see `ionquant/tags`_ for valid values for ``<tag>``)


.. |downloads_ionquant| image:: https://img.shields.io/conda/dn/bioconda/ionquant.svg?style=flat
   :target: https://anaconda.org/bioconda/ionquant
   :alt:   (downloads)
.. |docker_ionquant| image:: https://quay.io/repository/biocontainers/ionquant/status
   :target: https://quay.io/repository/biocontainers/ionquant
.. _`ionquant/tags`: https://quay.io/repository/biocontainers/ionquant?tab=tags


.. raw:: html

    <script>
        var package = "ionquant";
        var versions = ["1.11.9","1.10.27","1.10.12","1.10.12"];
    </script>





Notes
-----
The \"ionquant\" command runs the IonQuant java program.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ionquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ionquant/README.html