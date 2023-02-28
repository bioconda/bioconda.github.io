:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylprotpredictor'
.. highlight: bash

pylprotpredictor
================

.. conda:recipe:: pylprotpredictor
   :replaces_section_title:
   :noindex:

   A tool to predict PYL proteins

   :homepage: http://bebatut.fr/PylProtPredictor/
   :license: Apache / Apache License
   :recipe: /`pylprotpredictor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylprotpredictor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylprotpredictor/meta.yaml>`_

   


.. conda:package:: pylprotpredictor

   |downloads_pylprotpredictor| |docker_pylprotpredictor|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends biopython: 
   :depends codecov: 
   :depends diamond: 
   :depends flake8: 
   :depends pandas: 
   :depends prodigal: 
   :depends pytest-cov: 
   :depends python: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pylprotpredictor

   and update with::

      conda update pylprotpredictor

   or use the docker container::

      docker pull quay.io/biocontainers/pylprotpredictor:<tag>

   (see `pylprotpredictor/tags`_ for valid values for ``<tag>``)


.. |downloads_pylprotpredictor| image:: https://img.shields.io/conda/dn/bioconda/pylprotpredictor.svg?style=flat
   :target: https://anaconda.org/bioconda/pylprotpredictor
   :alt:   (downloads)
.. |docker_pylprotpredictor| image:: https://quay.io/repository/biocontainers/pylprotpredictor/status
   :target: https://quay.io/repository/biocontainers/pylprotpredictor
.. _`pylprotpredictor/tags`: https://quay.io/repository/biocontainers/pylprotpredictor?tab=tags


.. raw:: html

    <script>
        var package = "pylprotpredictor";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylprotpredictor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylprotpredictor/README.html