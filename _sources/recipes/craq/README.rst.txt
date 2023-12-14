:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'craq'
.. highlight: bash

craq
====

.. conda:recipe:: craq
   :replaces_section_title:
   :noindex:

   Pinpoint assembly errors for genomic assessing and correcting.

   :homepage: https://github.com/JiaoLaboratory/CRAQ
   :license: MIT / MIT
   :recipe: /`craq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/craq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/craq/meta.yaml>`_

   CRAQ \(Clipping Reveals Assembly Quality\) is a reference\-free genome assembly evaluator that can assess the accuracy of assembled genomic sequences and provide detailed assembly quality assessment from multiple perspectives. It can report precise locations of small\-scale Clip\-based Regional Errors \(CREs\)\, large\-scale Clip\-based Structural Errors \(CSEs\)\, as well as regional and overall AQI metrics \(R\-AQI \& S\-AQI\) for assembly evaluation. Through evaluating a large set of genome assemblies with different qualities\, we classified genomes as following\: AQI \> 90\, reference quality\; AQI from 80\-90\, high quality\; AQI from 60\-80\, draft quality\; and AQI \< 60\, low quality. CRAQ also considered haplotype features which is important for identifying true misassembly. It can output coordinates of regional heterozygous variants \(CRHs\) and coordinates of structural heterozygous variants \(CSHs\) based on the ratio of clipped alignments and mapping coverage. Moreover\, CRAQ detects potential chimeric contigs and break them at conflict breakpoints for assembly correction. This document has the information on how to run CRAQ.



.. conda:package:: craq

   |downloads_craq| |docker_craq|

   :versions:
      
      

      ``1.0.9-0``

      

   
   :depends minimap2: ``>=2.17``
   :depends perl: ``>=5``
   :depends python: ``>=3.7``
   :depends python_circos: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install craq

   and update with::

      mamba update craq

  To create a new environment, run::

      mamba create --name myenvname craq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/craq:<tag>

   (see `craq/tags`_ for valid values for ``<tag>``)


.. |downloads_craq| image:: https://img.shields.io/conda/dn/bioconda/craq.svg?style=flat
   :target: https://anaconda.org/bioconda/craq
   :alt:   (downloads)
.. |docker_craq| image:: https://quay.io/repository/biocontainers/craq/status
   :target: https://quay.io/repository/biocontainers/craq
.. _`craq/tags`: https://quay.io/repository/biocontainers/craq?tab=tags


.. raw:: html

    <script>
        var package = "craq";
        var versions = ["1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/craq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/craq/README.html