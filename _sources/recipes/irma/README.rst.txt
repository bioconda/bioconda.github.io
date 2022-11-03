:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irma'
.. highlight: bash

irma
====

.. conda:recipe:: irma
   :replaces_section_title:
   :noindex:

   IRMA\: Iterative Refinement Meta\-Assembler for the robust assembly\, variant calling\, and phasing of highly variable RNA viruses.

   :homepage: https://wonder.cdc.gov/amd/flu/irma/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`irma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irma/meta.yaml>`_

   


.. conda:package:: irma

   |downloads_irma| |docker_irma|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends blat: ``>=35``
   :depends fasttree: ``>=2.1.3``
   :depends minimap2: ``>=2.17``
   :depends muscle: ``>=3.8.1551``
   :depends parallel: ``>=20181022``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends pigz: ``>=2.3.4``
   :depends r-base: ``>=3.5.1``
   :depends samtools: ``>=1.2``
   :depends zip: ``>=3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irma

   and update with::

      conda update irma

   or use the docker container::

      docker pull quay.io/biocontainers/irma:<tag>

   (see `irma/tags`_ for valid values for ``<tag>``)


.. |downloads_irma| image:: https://img.shields.io/conda/dn/bioconda/irma.svg?style=flat
   :target: https://anaconda.org/bioconda/irma
   :alt:   (downloads)
.. |docker_irma| image:: https://quay.io/repository/biocontainers/irma/status
   :target: https://quay.io/repository/biocontainers/irma
.. _`irma/tags`: https://quay.io/repository/biocontainers/irma?tab=tags


.. raw:: html

    <script>
        var package = "irma";
        var versions = ["1.0.3","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irma/README.html