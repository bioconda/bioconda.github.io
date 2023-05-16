:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samcut'
.. highlight: bash

samcut
======

.. conda:recipe:: samcut
   :replaces_section_title:
   :noindex:

   samcut is \`cut\` for sam. Select \(cut\) columns from the output of \`samtools view\` using human\-readale field names.

   :homepage: https://github.com/gshiba/samcut
   :license: MIT
   :recipe: /`samcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samcut/meta.yaml>`_

   


.. conda:package:: samcut

   |downloads_samcut| |docker_samcut|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.0.10-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samcut

   and update with::

      conda update samcut

   or use the docker container::

      docker pull quay.io/biocontainers/samcut:<tag>

   (see `samcut/tags`_ for valid values for ``<tag>``)


.. |downloads_samcut| image:: https://img.shields.io/conda/dn/bioconda/samcut.svg?style=flat
   :target: https://anaconda.org/bioconda/samcut
   :alt:   (downloads)
.. |docker_samcut| image:: https://quay.io/repository/biocontainers/samcut/status
   :target: https://quay.io/repository/biocontainers/samcut
.. _`samcut/tags`: https://quay.io/repository/biocontainers/samcut?tab=tags


.. raw:: html

    <script>
        var package = "samcut";
        var versions = ["0.1.1","0.1.1","0.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samcut/README.html