:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samestr'
.. highlight: bash

samestr
=======

.. conda:recipe:: samestr
   :replaces_section_title:
   :noindex:

   SameStr identifies shared strains between pairs of metagenomic samples based on the similarity of SNV profiles.

   :homepage: https://github.com/danielpodlesny/samestr/
   :developer docs: https://github.com/danielpodlesny/samestr
   :license: AGPL / GNU Affero General Public License v3
   :recipe: /`samestr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samestr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samestr/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-022-01251-w`

   


.. conda:package:: samestr

   |downloads_samestr| |docker_samestr|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samestr

   and update with::

      conda update samestr

   or use the docker container::

      docker pull quay.io/biocontainers/samestr:<tag>

   (see `samestr/tags`_ for valid values for ``<tag>``)


.. |downloads_samestr| image:: https://img.shields.io/conda/dn/bioconda/samestr.svg?style=flat
   :target: https://anaconda.org/bioconda/samestr
   :alt:   (downloads)
.. |docker_samestr| image:: https://quay.io/repository/biocontainers/samestr/status
   :target: https://quay.io/repository/biocontainers/samestr
.. _`samestr/tags`: https://quay.io/repository/biocontainers/samestr?tab=tags


.. raw:: html

    <script>
        var package = "samestr";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samestr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samestr/README.html