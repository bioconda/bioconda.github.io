:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mp-est'
.. highlight: bash

mp-est
======

.. conda:recipe:: mp-est
   :replaces_section_title:
   :noindex:

   Maximum Pseudo\-likelihood Estimation of Species Trees

   :homepage: https://github.com/lliu1871/mp-est
   :license: GPL / GNU GPLv3
   :recipe: /`mp-est <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp-est>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp-est/meta.yaml>`_

   Maximum Pseudo\-likelihood Estimation of Species Trees


.. conda:package:: mp-est

   |downloads_mp-est| |docker_mp-est|

   :versions:
      
      

      ``3.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mp-est

   and update with::

      conda update mp-est

   or use the docker container::

      docker pull quay.io/biocontainers/mp-est:<tag>

   (see `mp-est/tags`_ for valid values for ``<tag>``)


.. |downloads_mp-est| image:: https://img.shields.io/conda/dn/bioconda/mp-est.svg?style=flat
   :target: https://anaconda.org/bioconda/mp-est
   :alt:   (downloads)
.. |docker_mp-est| image:: https://quay.io/repository/biocontainers/mp-est/status
   :target: https://quay.io/repository/biocontainers/mp-est
.. _`mp-est/tags`: https://quay.io/repository/biocontainers/mp-est?tab=tags


.. raw:: html

    <script>
        var package = "mp-est";
        var versions = ["3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mp-est/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mp-est/README.html