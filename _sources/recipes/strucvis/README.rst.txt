:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strucvis'
.. highlight: bash

strucvis
========

.. conda:recipe:: strucvis
   :replaces_section_title:
   :noindex:

   strucVis \: Display small RNA depth of coverage on a predicted RNA secondary structure

   :homepage: https://github.com/MikeAxtell/strucVis
   :license: GPL / GPL-3.0
   :recipe: /`strucvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strucvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strucvis/meta.yaml>`_

   


.. conda:package:: strucvis

   |downloads_strucvis| |docker_strucvis|

   :versions:
      
      

      ``0.6-0``

      

   
   :depends perl: 
   :depends samtools: ``>=1.10``
   :depends viennarna: ``2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strucvis

   and update with::

      conda update strucvis

   or use the docker container::

      docker pull quay.io/biocontainers/strucvis:<tag>

   (see `strucvis/tags`_ for valid values for ``<tag>``)


.. |downloads_strucvis| image:: https://img.shields.io/conda/dn/bioconda/strucvis.svg?style=flat
   :target: https://anaconda.org/bioconda/strucvis
   :alt:   (downloads)
.. |docker_strucvis| image:: https://quay.io/repository/biocontainers/strucvis/status
   :target: https://quay.io/repository/biocontainers/strucvis
.. _`strucvis/tags`: https://quay.io/repository/biocontainers/strucvis?tab=tags


.. raw:: html

    <script>
        var package = "strucvis";
        var versions = ["0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strucvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strucvis/README.html