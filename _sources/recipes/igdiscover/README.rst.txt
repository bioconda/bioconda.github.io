:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igdiscover'
.. highlight: bash

igdiscover
==========

.. conda:recipe:: igdiscover
   :replaces_section_title:
   :noindex:

   Analyze antibody repertoires and discover new V genes

   :homepage: https://igdiscover.se/
   :license: MIT
   :recipe: /`igdiscover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover/meta.yaml>`_
   :links: biotools: :biotools:`igdiscover`, doi: :doi:`10.1038/ncomms13642`

   


.. conda:package:: igdiscover

   |downloads_igdiscover| |docker_igdiscover|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13-0</code>,  <code>0.12.3-1</code>,  <code>0.12.3-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12-0</code>,  <code>0.11-0</code>,  <code>0.10-3</code>,  <code>0.10-2</code>,  </span></summary>
      

      ``0.13-0``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12-0``,  ``0.11-0``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.9-1``,  ``0.9-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.5-1``,  ``0.4-1``,  ``0.3-1``

      
      .. raw:: html

         </details>
      

   
   :depends cutadapt: ``>=3.5``
   :depends dnaio: ``>=0.7.1``
   :depends flash: ``1.2.*``
   :depends igblast: ``1.17.*``
   :depends matplotlib-base: ``>=3.1.0``
   :depends muscle: ``3.8.*``
   :depends numpy: ``>=1.17.5``
   :depends pandas: ``>=1.0``
   :depends pear: ``0.9.6.*``
   :depends python: ``>=3.6``
   :depends ruamel.yaml: ``0.16.*``
   :depends scipy: ``>=1.4.1``
   :depends seaborn-base: ``0.11.*``
   :depends snakemake-minimal: ``5.9.*``
   :depends tinyalign: ``>=0.2``
   :depends xopen: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igdiscover

   and update with::

      conda update igdiscover

   or use the docker container::

      docker pull quay.io/biocontainers/igdiscover:<tag>

   (see `igdiscover/tags`_ for valid values for ``<tag>``)


.. |downloads_igdiscover| image:: https://img.shields.io/conda/dn/bioconda/igdiscover.svg?style=flat
   :target: https://anaconda.org/bioconda/igdiscover
   :alt:   (downloads)
.. |docker_igdiscover| image:: https://quay.io/repository/biocontainers/igdiscover/status
   :target: https://quay.io/repository/biocontainers/igdiscover
.. _`igdiscover/tags`: https://quay.io/repository/biocontainers/igdiscover?tab=tags


.. raw:: html

    <script>
        var package = "igdiscover";
        var versions = ["0.13","0.12.3","0.12.3","0.12.2","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igdiscover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igdiscover/README.html