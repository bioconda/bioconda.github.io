:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnparser'
.. highlight: bash

gnparser
========

.. conda:recipe:: gnparser
   :replaces_section_title:
   :noindex:

   GNparser normalises scientific names and extracts their semantic elements

   :homepage: https://parser.globalnames.org/
   :developer docs: https://github.com/gnames/gnparser
   :license: MIT
   :recipe: /`gnparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnparser/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.5281/zenodo.5111569`

   


.. conda:package:: gnparser

   |downloads_gnparser| |docker_gnparser|

   :versions:
      
      

      ``1.7.3-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gnparser

   and update with::

      conda update gnparser

   or use the docker container::

      docker pull quay.io/biocontainers/gnparser:<tag>

   (see `gnparser/tags`_ for valid values for ``<tag>``)


.. |downloads_gnparser| image:: https://img.shields.io/conda/dn/bioconda/gnparser.svg?style=flat
   :target: https://anaconda.org/bioconda/gnparser
   :alt:   (downloads)
.. |docker_gnparser| image:: https://quay.io/repository/biocontainers/gnparser/status
   :target: https://quay.io/repository/biocontainers/gnparser
.. _`gnparser/tags`: https://quay.io/repository/biocontainers/gnparser?tab=tags


.. raw:: html

    <script>
        var package = "gnparser";
        var versions = ["1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnparser/README.html