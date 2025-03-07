:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'te-aid'
.. highlight: bash

te-aid
======

.. conda:recipe:: te-aid
   :replaces_section_title:
   :noindex:

   Annotation helper tool for the manual curation of transposable element consensus sequences

   :homepage: https://github.com/clemgoub/TE-Aid/tree/v{version}
   :developer docs: https://github.com/clemgoub/TE-Aid
   :license: MIT
   :recipe: /`te-aid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/te-aid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/te-aid/meta.yaml>`_

   TE\-Aid is a shell\+R program aimed to help the manual curation of transposable 
   elements \(TE\). It inputs a TE consensus sequence \(fasta format\) and requires a 
   reference genome \(in fasta as well\). TE\-Aid produces 4 figures reporting i\) the genomic 
   hits with divergence to consensus\, ii\) the genomic coverage of the consensus\, 
   iii\) a self dot\-plot\, and iv\) a structure analysis including TIR and LTR suggestions\, 
   open reading frames \(ORFs\) and TE protein hit annotation.


.. conda:package:: te-aid

   |downloads_te-aid| |docker_te-aid|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.1``
   :depends blast: ``>=2.15.0``
   :depends emboss: ``>=6.6.0``
   :depends r: ``>=4.2``
   :depends r-rcpp: ``>=1.0.12``
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

      mamba install te-aid

   and update with::

      mamba update te-aid

  To create a new environment, run::

      mamba create --name myenvname te-aid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/te-aid:<tag>

   (see `te-aid/tags`_ for valid values for ``<tag>``)


.. |downloads_te-aid| image:: https://img.shields.io/conda/dn/bioconda/te-aid.svg?style=flat
   :target: https://anaconda.org/bioconda/te-aid
   :alt:   (downloads)
.. |docker_te-aid| image:: https://quay.io/repository/biocontainers/te-aid/status
   :target: https://quay.io/repository/biocontainers/te-aid
.. _`te-aid/tags`: https://quay.io/repository/biocontainers/te-aid?tab=tags


.. raw:: html

    <script>
        var package = "te-aid";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/te-aid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/te-aid/README.html