:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgems'
.. highlight: bash

mgems
=====

.. conda:recipe:: mgems
   :replaces_section_title:
   :noindex:

   mGEMS \- sequencing data binning based on probabilistic classification

   :homepage: https://github.com/PROBIC/mGEMS
   :license: MIT
   :recipe: /`mgems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgems/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000691`

   


.. conda:package:: mgems

   |downloads_mgems| |docker_mgems|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgems

   and update with::

      conda update mgems

   or use the docker container::

      docker pull quay.io/biocontainers/mgems:<tag>

   (see `mgems/tags`_ for valid values for ``<tag>``)


.. |downloads_mgems| image:: https://img.shields.io/conda/dn/bioconda/mgems.svg?style=flat
   :target: https://anaconda.org/bioconda/mgems
   :alt:   (downloads)
.. |docker_mgems| image:: https://quay.io/repository/biocontainers/mgems/status
   :target: https://quay.io/repository/biocontainers/mgems
.. _`mgems/tags`: https://quay.io/repository/biocontainers/mgems?tab=tags


.. raw:: html

    <script>
        var package = "mgems";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgems/README.html