:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcluster'
.. highlight: bash

gcluster
========

.. conda:recipe:: gcluster
   :replaces_section_title:
   :noindex:

   Gcluster is a simple\-to\-use tool for visualizing and comparing genome contexts for numerous genomes

   :homepage: http://www.microbialgenomic.com/Gcluster_tool.html
   :license: perl_5
   :recipe: /`gcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcluster/meta.yaml>`_

   


.. conda:package:: gcluster

   |downloads_gcluster| |docker_gcluster|

   :versions:
      
      

      ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends blast: 
   :depends mcl: 
   :depends perl-bioperl-core: 
   :depends perl-gd: 
   :depends perl-gd-svg: 
   :depends perl-svg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gcluster

   and update with::

      conda update gcluster

   or use the docker container::

      docker pull quay.io/biocontainers/gcluster:<tag>

   (see `gcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_gcluster| image:: https://img.shields.io/conda/dn/bioconda/gcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/gcluster
   :alt:   (downloads)
.. |docker_gcluster| image:: https://quay.io/repository/biocontainers/gcluster/status
   :target: https://quay.io/repository/biocontainers/gcluster
.. _`gcluster/tags`: https://quay.io/repository/biocontainers/gcluster?tab=tags


.. raw:: html

    <script>
        var package = "gcluster";
        var versions = ["2.0.5","2.0.5","2.0.4","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcluster/README.html