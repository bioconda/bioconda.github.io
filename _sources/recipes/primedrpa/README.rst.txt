:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primedrpa'
.. highlight: bash

primedrpa
=========

.. conda:recipe:: primedrpa
   :replaces_section_title:
   :noindex:

   RPA primer \& probe design tool.

   :homepage: https://github.com/MatthewHiggins2017/bioconda-PrimedRPA/
   :license: GPL3
   :recipe: /`primedrpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primedrpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primedrpa/meta.yaml>`_

   


.. conda:package:: primedrpa

   |downloads_primedrpa| |docker_primedrpa|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends blast: 
   :depends clustalo: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends samtools: ``>=1.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primedrpa

   and update with::

      conda update primedrpa

   or use the docker container::

      docker pull quay.io/biocontainers/primedrpa:<tag>

   (see `primedrpa/tags`_ for valid values for ``<tag>``)


.. |downloads_primedrpa| image:: https://img.shields.io/conda/dn/bioconda/primedrpa.svg?style=flat
   :target: https://anaconda.org/bioconda/primedrpa
   :alt:   (downloads)
.. |docker_primedrpa| image:: https://quay.io/repository/biocontainers/primedrpa/status
   :target: https://quay.io/repository/biocontainers/primedrpa
.. _`primedrpa/tags`: https://quay.io/repository/biocontainers/primedrpa?tab=tags


.. raw:: html

    <script>
        var package = "primedrpa";
        var versions = ["1.0.3","1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primedrpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primedrpa/README.html