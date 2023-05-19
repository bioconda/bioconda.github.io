:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somalier'
.. highlight: bash

somalier
========

.. conda:recipe:: somalier
   :replaces_section_title:
   :noindex:

   fast sample\-swap and relatedness checks on BAMs\/CRAMs\/VCFs\/GVCFs.

   :homepage: https://github.com/brentp/somalier
   :license: MIT
   :recipe: /`somalier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somalier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somalier/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-020-00761-2`, biotools: :biotools:`somalier`

   


.. conda:package:: somalier

   |downloads_somalier| |docker_somalier|

   :versions:
      
      

      ``0.2.15-1``,  ``0.2.15-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install somalier

   and update with::

      conda update somalier

   or use the docker container::

      docker pull quay.io/biocontainers/somalier:<tag>

   (see `somalier/tags`_ for valid values for ``<tag>``)


.. |downloads_somalier| image:: https://img.shields.io/conda/dn/bioconda/somalier.svg?style=flat
   :target: https://anaconda.org/bioconda/somalier
   :alt:   (downloads)
.. |docker_somalier| image:: https://quay.io/repository/biocontainers/somalier/status
   :target: https://quay.io/repository/biocontainers/somalier
.. _`somalier/tags`: https://quay.io/repository/biocontainers/somalier?tab=tags


.. raw:: html

    <script>
        var package = "somalier";
        var versions = ["0.2.15","0.2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somalier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somalier/README.html