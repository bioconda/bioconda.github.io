:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaprokka'
.. highlight: bash

metaprokka
==========

.. conda:recipe:: metaprokka
   :replaces_section_title:
   :noindex:

   A specialized version of Prokka to quickly annotate metagenome assemblies.

   :homepage: https://github.com/telatin/metaprokka
   :license: GPL / GPLv3
   :recipe: /`metaprokka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprokka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprokka/meta.yaml>`_
   :links: biotools: :biotools:`metaprokka`

   


.. conda:package:: metaprokka

   |downloads_metaprokka| |docker_metaprokka|

   :versions:
      
      

      ``1.14.6_1-1``,  ``1.14.6_1-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends prokka: ``1.14.6.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaprokka

   and update with::

      conda update metaprokka

   or use the docker container::

      docker pull quay.io/biocontainers/metaprokka:<tag>

   (see `metaprokka/tags`_ for valid values for ``<tag>``)


.. |downloads_metaprokka| image:: https://img.shields.io/conda/dn/bioconda/metaprokka.svg?style=flat
   :target: https://anaconda.org/bioconda/metaprokka
   :alt:   (downloads)
.. |docker_metaprokka| image:: https://quay.io/repository/biocontainers/metaprokka/status
   :target: https://quay.io/repository/biocontainers/metaprokka
.. _`metaprokka/tags`: https://quay.io/repository/biocontainers/metaprokka?tab=tags


.. raw:: html

    <script>
        var package = "metaprokka";
        var versions = ["1.14.6_1","1.14.6_1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaprokka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaprokka/README.html