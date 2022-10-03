:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phamb'
.. highlight: bash

phamb
=====

.. conda:recipe:: phamb
   :replaces_section_title:
   :noindex:

   phamb discovery approach used to isolate metagenome derived viromes and High\-quality viral genomes

   :homepage: https://github.com/RasmussenLab/phamb
   :license: MIT / GNU General Public (GPL)
   :recipe: /`phamb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phamb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phamb/meta.yaml>`_

   


.. conda:package:: phamb

   |downloads_phamb| |docker_phamb|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends numpy: ``>=1.14.6``
   :depends python: ``>=3.9``
   :depends scikit-learn: ``1.0.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phamb

   and update with::

      conda update phamb

   or use the docker container::

      docker pull quay.io/biocontainers/phamb:<tag>

   (see `phamb/tags`_ for valid values for ``<tag>``)


.. |downloads_phamb| image:: https://img.shields.io/conda/dn/bioconda/phamb.svg?style=flat
   :target: https://anaconda.org/bioconda/phamb
   :alt:   (downloads)
.. |docker_phamb| image:: https://quay.io/repository/biocontainers/phamb/status
   :target: https://quay.io/repository/biocontainers/phamb
.. _`phamb/tags`: https://quay.io/repository/biocontainers/phamb?tab=tags


.. raw:: html

    <script>
        var package = "phamb";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phamb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phamb/README.html