:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcgnomes'
.. highlight: bash

mhcgnomes
=========

.. conda:recipe:: mhcgnomes
   :replaces_section_title:
   :noindex:

   Python library for parsing MHC nomenclature in the wild

   :homepage: https://github.com/til-unc/mhcgnomes
   :license: APACHE / Apache Software
   :recipe: /`mhcgnomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcgnomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcgnomes/meta.yaml>`_

   


.. conda:package:: mhcgnomes

   |downloads_mhcgnomes| |docker_mhcgnomes|

   :versions:
      
      

      ``1.8.4-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: ``5.4``
   :depends serializable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhcgnomes

   and update with::

      conda update mhcgnomes

   or use the docker container::

      docker pull quay.io/biocontainers/mhcgnomes:<tag>

   (see `mhcgnomes/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcgnomes| image:: https://img.shields.io/conda/dn/bioconda/mhcgnomes.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcgnomes
   :alt:   (downloads)
.. |docker_mhcgnomes| image:: https://quay.io/repository/biocontainers/mhcgnomes/status
   :target: https://quay.io/repository/biocontainers/mhcgnomes
.. _`mhcgnomes/tags`: https://quay.io/repository/biocontainers/mhcgnomes?tab=tags


.. raw:: html

    <script>
        var package = "mhcgnomes";
        var versions = ["1.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcgnomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcgnomes/README.html