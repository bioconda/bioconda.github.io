:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomad'
.. highlight: bash

genomad
=======

.. conda:recipe:: genomad
   :replaces_section_title:
   :noindex:

   Identification of mobile genetic elements

   :homepage: https://portal.nersc.gov/genomad/
   :developer docs: https://github.com/apcamargo/genomad/
   :license: BSD / Lawrence Berkeley National Labs BSD variant license
   :recipe: /`genomad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomad/meta.yaml>`_

   


.. conda:package:: genomad

   |downloads_genomad| |docker_genomad|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomad

   and update with::

      conda update genomad

   or use the docker container::

      docker pull quay.io/biocontainers/genomad:<tag>

   (see `genomad/tags`_ for valid values for ``<tag>``)


.. |downloads_genomad| image:: https://img.shields.io/conda/dn/bioconda/genomad.svg?style=flat
   :target: https://anaconda.org/bioconda/genomad
   :alt:   (downloads)
.. |docker_genomad| image:: https://quay.io/repository/biocontainers/genomad/status
   :target: https://quay.io/repository/biocontainers/genomad
.. _`genomad/tags`: https://quay.io/repository/biocontainers/genomad?tab=tags


.. raw:: html

    <script>
        var package = "genomad";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomad/README.html