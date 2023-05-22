:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panacus'
.. highlight: bash

panacus
=======

.. conda:recipe:: panacus
   :replaces_section_title:
   :noindex:

   panacus is a tool for computing counting statistics for GFA files

   :homepage: https://github.com/marschall-lab/panacus
   :license: MIT
   :recipe: /`panacus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacus/meta.yaml>`_

   


.. conda:package:: panacus

   |downloads_panacus| |docker_panacus|

   :versions:
      
      

      ``0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panacus

   and update with::

      conda update panacus

   or use the docker container::

      docker pull quay.io/biocontainers/panacus:<tag>

   (see `panacus/tags`_ for valid values for ``<tag>``)


.. |downloads_panacus| image:: https://img.shields.io/conda/dn/bioconda/panacus.svg?style=flat
   :target: https://anaconda.org/bioconda/panacus
   :alt:   (downloads)
.. |docker_panacus| image:: https://quay.io/repository/biocontainers/panacus/status
   :target: https://quay.io/repository/biocontainers/panacus
.. _`panacus/tags`: https://quay.io/repository/biocontainers/panacus?tab=tags


.. raw:: html

    <script>
        var package = "panacus";
        var versions = ["0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panacus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panacus/README.html