:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'resfinder'
.. highlight: bash

resfinder
=========

.. conda:recipe:: resfinder
   :replaces_section_title:
   :noindex:

   ResFinder identifies acquired antimicrobial resistance genes in total or partial sequenced isolates of bacteria.

   :homepage: https://bitbucket.org/genomicepidemiology/resfinder
   :license: APACHE / APACHE-2.0
   :recipe: /`resfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resfinder/meta.yaml>`_

   


.. conda:package:: resfinder

   |downloads_resfinder| |docker_resfinder|

   :versions:
      
      

      ``4.1.11-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.8.1``
   :depends cgecore: ``1.5.5.*``
   :depends git: 
   :depends gitpython: 
   :depends kma: 
   :depends python: ``>=3``
   :depends python-dateutil: 
   :depends tabulate: ``0.7.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install resfinder

   and update with::

      conda update resfinder

   or use the docker container::

      docker pull quay.io/biocontainers/resfinder:<tag>

   (see `resfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_resfinder| image:: https://img.shields.io/conda/dn/bioconda/resfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/resfinder
   :alt:   (downloads)
.. |docker_resfinder| image:: https://quay.io/repository/biocontainers/resfinder/status
   :target: https://quay.io/repository/biocontainers/resfinder
.. _`resfinder/tags`: https://quay.io/repository/biocontainers/resfinder?tab=tags


.. raw:: html

    <script>
        var package = "resfinder";
        var versions = ["4.1.11"];
    </script>





Notes
-----
ResFinder requires databases that can be downloaded with download\-db.sh.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/resfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/resfinder/README.html