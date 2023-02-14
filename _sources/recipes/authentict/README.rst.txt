:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'authentict'
.. highlight: bash

authentict
==========

.. conda:recipe:: authentict
   :replaces_section_title:
   :noindex:

   AuthentiCT estimates the proportion of present\-day DNA contamination in ancient DNA datasets generated from single\-stranded libraries.

   :homepage: https://github.com/StephanePeyregne/AuthentiCT
   :license: GPL3
   :recipe: /`authentict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/authentict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/authentict/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02123-y`

   


.. conda:package:: authentict

   |downloads_authentict| |docker_authentict|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install authentict

   and update with::

      conda update authentict

   or use the docker container::

      docker pull quay.io/biocontainers/authentict:<tag>

   (see `authentict/tags`_ for valid values for ``<tag>``)


.. |downloads_authentict| image:: https://img.shields.io/conda/dn/bioconda/authentict.svg?style=flat
   :target: https://anaconda.org/bioconda/authentict
   :alt:   (downloads)
.. |docker_authentict| image:: https://quay.io/repository/biocontainers/authentict/status
   :target: https://quay.io/repository/biocontainers/authentict
.. _`authentict/tags`: https://quay.io/repository/biocontainers/authentict?tab=tags


.. raw:: html

    <script>
        var package = "authentict";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/authentict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/authentict/README.html