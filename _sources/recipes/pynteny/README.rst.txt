:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pynteny'
.. highlight: bash

pynteny
=======

.. conda:recipe:: pynteny
   :replaces_section_title:
   :noindex:

   Multiple HMM \- search via synteny structures in Python

   :homepage: http://github.com/robaina/Pynteny
   :documentation: https://robaina.github.io/Pynteny/
   
   :license: Apache-2.0 license
   :recipe: /`pynteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynteny/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.7082448`

   Multiple HMM \- search via synteny structures in Python


.. conda:package:: pynteny

   |downloads_pynteny| |docker_pynteny|

   :versions:
      
      

      ``0.0.5-0``

      

   
   :depends biopython: 
   :depends hmmer: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends psutil: 
   :depends pyfastx: ``>=0.8``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-wget: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends streamlit: 
   :depends streamlit-aggrid: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pynteny

   and update with::

      conda update pynteny

   or use the docker container::

      docker pull quay.io/biocontainers/pynteny:<tag>

   (see `pynteny/tags`_ for valid values for ``<tag>``)


.. |downloads_pynteny| image:: https://img.shields.io/conda/dn/bioconda/pynteny.svg?style=flat
   :target: https://anaconda.org/bioconda/pynteny
   :alt:   (downloads)
.. |docker_pynteny| image:: https://quay.io/repository/biocontainers/pynteny/status
   :target: https://quay.io/repository/biocontainers/pynteny
.. _`pynteny/tags`: https://quay.io/repository/biocontainers/pynteny?tab=tags


.. raw:: html

    <script>
        var package = "pynteny";
        var versions = ["0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pynteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pynteny/README.html