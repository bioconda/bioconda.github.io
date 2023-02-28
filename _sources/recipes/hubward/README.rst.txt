:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hubward'
.. highlight: bash

hubward
=======

.. conda:recipe:: hubward
   :replaces_section_title:
   :noindex:

   Manage the visualization of large amounts of other people\'s \[often messy\] genomics data

   :homepage: https://github.com/daler/hubward
   :license: BSD License
   :recipe: /`hubward <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward/meta.yaml>`_

   


.. conda:package:: hubward

   |downloads_hubward| |docker_hubward|

   :versions:
      
      

      ``0.2.2-1``,  ``0.2.1-1``,  ``0.2.0-0``

      

   
   :depends argh: 
   :depends bleach: 
   :depends colorama: 
   :depends docutils: 
   :depends fabric: 
   :depends functools32: 
   :depends jsonschema: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pyaml: 
   :depends pybedtools: 
   :depends pycurl: 
   :depends python: ``2.7*``
   :depends pyyaml: 
   :depends trackhub: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hubward

   and update with::

      conda update hubward

   or use the docker container::

      docker pull quay.io/biocontainers/hubward:<tag>

   (see `hubward/tags`_ for valid values for ``<tag>``)


.. |downloads_hubward| image:: https://img.shields.io/conda/dn/bioconda/hubward.svg?style=flat
   :target: https://anaconda.org/bioconda/hubward
   :alt:   (downloads)
.. |docker_hubward| image:: https://quay.io/repository/biocontainers/hubward/status
   :target: https://quay.io/repository/biocontainers/hubward
.. _`hubward/tags`: https://quay.io/repository/biocontainers/hubward?tab=tags


.. raw:: html

    <script>
        var package = "hubward";
        var versions = ["0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hubward/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hubward/README.html