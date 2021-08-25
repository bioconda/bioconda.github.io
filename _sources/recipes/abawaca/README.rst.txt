:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abawaca'
.. highlight: bash

abawaca
=======

.. conda:recipe:: abawaca
   :replaces_section_title:
   :noindex:

   abawaca is a binning program for metagenomics

   :homepage: https://github.com/CK7/abawaca
   :license: open source
   :recipe: /`abawaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abawaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abawaca/meta.yaml>`_
   :links: doi: :doi:`10.1038/nature14486`

   


.. conda:package:: abawaca

   |downloads_abawaca| |docker_abawaca|

   :versions:
      
      

      ``1.00-3``,  ``1.00-2``,  ``1.00-1``,  ``1.00-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abawaca

   and update with::

      conda update abawaca

   or use the docker container::

      docker pull quay.io/biocontainers/abawaca:<tag>

   (see `abawaca/tags`_ for valid values for ``<tag>``)


.. |downloads_abawaca| image:: https://img.shields.io/conda/dn/bioconda/abawaca.svg?style=flat
   :target: https://anaconda.org/bioconda/abawaca
   :alt:   (downloads)
.. |docker_abawaca| image:: https://quay.io/repository/biocontainers/abawaca/status
   :target: https://quay.io/repository/biocontainers/abawaca
.. _`abawaca/tags`: https://quay.io/repository/biocontainers/abawaca?tab=tags


.. raw:: html

    <script>
        var package = "abawaca";
        var versions = ["1.00","1.00","1.00","1.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abawaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abawaca/README.html