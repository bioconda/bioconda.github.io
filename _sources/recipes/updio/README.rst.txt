:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'updio'
.. highlight: bash

updio
=====

.. conda:recipe:: updio
   :replaces_section_title:
   :noindex:

   UPDio is designed to identify uniparental disomy in probands of trio VCF data.

   :homepage: https://github.com/rhpvorderman/updio
   :license: gpl-2.0-or-later
   :recipe: /`updio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/updio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/updio/meta.yaml>`_

   


.. conda:package:: updio

   |downloads_updio| |docker_updio|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bioconductor-quantsmooth: 
   :depends perl: ``<6``
   :depends perl-iterator-simple: 
   :depends perl-list-moreutils: 
   :depends perl-math-round: 
   :depends perl-path-class: 
   :depends perl-statistics-r: 
   :depends perl-vcftools-vcf: 
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install updio

   and update with::

      conda update updio

   or use the docker container::

      docker pull quay.io/biocontainers/updio:<tag>

   (see `updio/tags`_ for valid values for ``<tag>``)


.. |downloads_updio| image:: https://img.shields.io/conda/dn/bioconda/updio.svg?style=flat
   :target: https://anaconda.org/bioconda/updio
   :alt:   (downloads)
.. |docker_updio| image:: https://quay.io/repository/biocontainers/updio/status
   :target: https://quay.io/repository/biocontainers/updio
.. _`updio/tags`: https://quay.io/repository/biocontainers/updio?tab=tags


.. raw:: html

    <script>
        var package = "updio";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/updio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/updio/README.html