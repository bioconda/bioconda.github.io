:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfba'
.. highlight: bash

pyfba
=====

.. conda:recipe:: pyfba
   :replaces_section_title:
   :noindex:

   Python\-based Flux Balance Analysis using the ModelSEED

   :homepage: https://linsalrob.github.io/PyFBA/
   :developer docs: https://github.com/linsalrob/PyFBA/
   :license: MIT / MIT
   :recipe: /`pyfba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfba/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4972064`

   


.. conda:package:: pyfba

   |downloads_pyfba| |docker_pyfba|

   :versions:
      
      

      ``2.62-2``,  ``2.62-1``,  ``2.62-0``,  ``2.59-0``,  ``2.58-0``,  ``2.55-0``

      

   
   :depends beautifulsoup4: 
   :depends glpk: ``>=4.65,<4.66.0a0``
   :depends importlib_resources: 
   :depends jupyter: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends lxml: 
   :depends pyglpk: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfba

   and update with::

      conda update pyfba

   or use the docker container::

      docker pull quay.io/biocontainers/pyfba:<tag>

   (see `pyfba/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfba| image:: https://img.shields.io/conda/dn/bioconda/pyfba.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfba
   :alt:   (downloads)
.. |docker_pyfba| image:: https://quay.io/repository/biocontainers/pyfba/status
   :target: https://quay.io/repository/biocontainers/pyfba
.. _`pyfba/tags`: https://quay.io/repository/biocontainers/pyfba?tab=tags


.. raw:: html

    <script>
        var package = "pyfba";
        var versions = ["2.62","2.62","2.62","2.59","2.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfba/README.html