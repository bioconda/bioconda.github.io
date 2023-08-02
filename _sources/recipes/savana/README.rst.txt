:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savana'
.. highlight: bash

savana
======

.. conda:recipe:: savana
   :replaces_section_title:
   :noindex:

   SAVANA\: a somatic structural variant caller for long\-read data

   :homepage: https://github.com/cortes-ciriano-lab/savana
   :license: Free for Academic Use
   :recipe: /`savana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savana/meta.yaml>`_

   


.. conda:package:: savana

   |downloads_savana| |docker_savana|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.3-0``,  ``0.2.1-0``

      

   
   :depends cyvcf2: ``>=0.30.16``
   :depends pandas: ``>=2.0.0``
   :depends pybedtools: ``>=0.9.0``
   :depends pysam: ``>=0.20.0``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``>=1.2.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install savana

   and update with::

      conda update savana

   or use the docker container::

      docker pull quay.io/biocontainers/savana:<tag>

   (see `savana/tags`_ for valid values for ``<tag>``)


.. |downloads_savana| image:: https://img.shields.io/conda/dn/bioconda/savana.svg?style=flat
   :target: https://anaconda.org/bioconda/savana
   :alt:   (downloads)
.. |docker_savana| image:: https://quay.io/repository/biocontainers/savana/status
   :target: https://quay.io/repository/biocontainers/savana
.. _`savana/tags`: https://quay.io/repository/biocontainers/savana?tab=tags


.. raw:: html

    <script>
        var package = "savana";
        var versions = ["1.0.0","0.2.3","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savana/README.html