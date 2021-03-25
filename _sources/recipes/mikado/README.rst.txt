:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mikado'
.. highlight: bash

mikado
======

.. conda:recipe:: mikado
   :replaces_section_title:
   :noindex:

   A Python3 annotation program to select the best gene model in each locus

   :homepage: https://github.com/EI-CoreBioinformatics/mikado
   :license: LGPL-3.0-or-later
   :recipe: /`mikado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado/meta.yaml>`_

   


.. conda:package:: mikado

   |downloads_mikado| |docker_mikado|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-0``,  ``2.0rc2-1``,  ``2.0rc2-0``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends dataclasses: 
   :depends datrie: ``>=0.8``
   :depends docutils: 
   :depends drmaa: 
   :depends hypothesis: 
   :depends libcxx: ``>=9.0.1``
   :depends marshmallow: ``>=3.1.0``
   :depends marshmallow-dataclass: ``>=8.3.1``
   :depends msgpack-python: ``>=1.0.0``
   :depends networkx: ``>=2.3``
   :depends numpy: ``>=1.17.2``
   :depends pandas: ``>=1.0``
   :depends pip: 
   :depends pyfaidx: ``>=0.5.8``
   :depends pysam: ``>=0.15.3``
   :depends pytest: ``>=5.4.1``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python-rapidjson: ``>=1.0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyyaml: ``>=5.1.2``
   :depends scipy: ``>=1.3.1``
   :depends six: ``>=1.12.0``
   :depends snakemake: ``>=5.7.0``
   :depends sqlalchemy: ``>=1.3.9,<1.4.0``
   :depends sqlalchemy-utils: ``>=0.34.1``
   :depends sqlite: ``>=3.35.2,<4.0a0``
   :depends tabulate: ``>=0.8.5``
   :depends toml: ``>=0.10.0``
   :depends typeguard: ``>=2.9.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mikado

   and update with::

      conda update mikado

   or use the docker container::

      docker pull quay.io/biocontainers/mikado:<tag>

   (see `mikado/tags`_ for valid values for ``<tag>``)


.. |downloads_mikado| image:: https://img.shields.io/conda/dn/bioconda/mikado.svg?style=flat
   :target: https://anaconda.org/bioconda/mikado
   :alt:   (downloads)
.. |docker_mikado| image:: https://quay.io/repository/biocontainers/mikado/status
   :target: https://quay.io/repository/biocontainers/mikado
.. _`mikado/tags`: https://quay.io/repository/biocontainers/mikado?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mikado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mikado/README.html