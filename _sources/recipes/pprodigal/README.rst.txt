:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pprodigal'
.. highlight: bash

pprodigal
=========

.. conda:recipe:: pprodigal
   :replaces_section_title:
   :noindex:

   PProdigal \- Parallelized gene prediction based on Prodigal.

   :homepage: https://github.com/sjaenick/pprodigal
   :license: MIT
   :recipe: /`pprodigal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pprodigal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pprodigal/meta.yaml>`_

   


.. conda:package:: pprodigal

   |downloads_pprodigal| |docker_pprodigal|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends prodigal: ``>=2.6.3``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pprodigal

   and update with::

      conda update pprodigal

   or use the docker container::

      docker pull quay.io/biocontainers/pprodigal:<tag>

   (see `pprodigal/tags`_ for valid values for ``<tag>``)


.. |downloads_pprodigal| image:: https://img.shields.io/conda/dn/bioconda/pprodigal.svg?style=flat
   :target: https://anaconda.org/bioconda/pprodigal
   :alt:   (downloads)
.. |docker_pprodigal| image:: https://quay.io/repository/biocontainers/pprodigal/status
   :target: https://quay.io/repository/biocontainers/pprodigal
.. _`pprodigal/tags`: https://quay.io/repository/biocontainers/pprodigal?tab=tags


.. raw:: html

    <script>
        var package = "pprodigal";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pprodigal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pprodigal/README.html