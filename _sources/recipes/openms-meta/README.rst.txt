:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openms-meta'
.. highlight: bash

openms-meta
===========

.. conda:recipe:: openms-meta
   :replaces_section_title:
   :noindex:

   OpenMS is an open\-source software C\+\+ library for LC\-MS data management and analyses

   :homepage: https://github.com/OpenMS/OpenMS
   :license: BSD
   :recipe: /`openms-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms-meta/meta.yaml>`_
   :links: biotools: :biotools:`openms`, doi: :doi:`10.1038/nmeth.3959`

   


.. conda:package:: libopenms

   |downloads_libopenms| |docker_libopenms|

   :versions:
      
      

      ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends hdf5: ``>=1.10.5,<1.10.6.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends qt: ``>=5.12.5,<5.13.0a0``
   :depends sqlite: ``>=3.32.3,<4.0a0``
   :depends xerces-c: ``>=3.2.2,<3.2.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libopenms

   and update with::

      conda update libopenms

   or use the docker container::

      docker pull quay.io/biocontainers/libopenms:<tag>

   (see `libopenms/tags`_ for valid values for ``<tag>``)


.. |downloads_libopenms| image:: https://img.shields.io/conda/dn/bioconda/libopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/libopenms
   :alt:   (downloads)
.. |docker_libopenms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`libopenms/tags`: https://quay.io/repository/biocontainers/libopenms?tab=tags



.. conda:package:: openms

   |downloads_openms| |docker_openms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-4</code>,  <code>2.5.0-3</code>,  <code>2.5.0-2</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.0-3</code>,  <code>2.3.0-2</code>,  </span></summary>
      

      ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends coinmp: ``>=1.8.4,<1.9.0a0``
   :depends eigen: ``>=3.3.7,<3.4.0a0``
   :depends glpk: ``>=4.65,<4.66.0a0``
   :depends hdf5: ``>=1.10.5,<1.10.6.0a0``
   :depends hdf5: ``>=1.10.5,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libopenms: ``2.5.0 h463af6b_4``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends libsvm: ``>=3.21,<3.22.0a0``
   :depends qt: ``>=5.12.5,<5.13.0a0``
   :depends sqlite: ``>=3.32.3,<4.0a0``
   :depends xerces-c: ``>=3.2.2,<3.2.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openms

   and update with::

      conda update openms

   or use the docker container::

      docker pull quay.io/biocontainers/openms:<tag>

   (see `openms/tags`_ for valid values for ``<tag>``)


.. |downloads_openms| image:: https://img.shields.io/conda/dn/bioconda/openms.svg?style=flat
   :target: https://anaconda.org/bioconda/openms
   :alt:   (downloads)
.. |docker_openms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms/tags`: https://quay.io/repository/biocontainers/openms?tab=tags



.. conda:package:: openms-meta

   |downloads_openms-meta| |docker_openms-meta|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openms-meta

   and update with::

      conda update openms-meta

   or use the docker container::

      docker pull quay.io/biocontainers/openms-meta:<tag>

   (see `openms-meta/tags`_ for valid values for ``<tag>``)


.. |downloads_openms-meta| image:: https://img.shields.io/conda/dn/bioconda/openms-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-meta
   :alt:   (downloads)
.. |docker_openms-meta| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms-meta/tags`: https://quay.io/repository/biocontainers/openms-meta?tab=tags



.. conda:package:: openms-thirdparty

   |downloads_openms-thirdparty| |docker_openms-thirdparty|

   :versions:
      
      

      ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      

   
   :depends bumbershoot: ``3_0_11579``
   :depends comet-ms: ``2016013``
   :depends crux-toolkit: ``3.2``
   :depends fido: ``1.0``
   :depends gnuplot: 
   :depends luciphor2: ``2018_06_28``
   :depends msgf_plus: ``2017.07.21``
   :depends omssa: ``2.1.9``
   :depends openms: ``2.5.0 h463af6b_4``
   :depends pepnovo: ``20101117``
   :depends percolator: ``3.4``
   :depends sirius-csifingerid: ``4.0.1``
   :depends thermorawfileparser: ``1.2.3``
   :depends xtandem: ``15.12.15.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openms-thirdparty

   and update with::

      conda update openms-thirdparty

   or use the docker container::

      docker pull quay.io/biocontainers/openms-thirdparty:<tag>

   (see `openms-thirdparty/tags`_ for valid values for ``<tag>``)


.. |downloads_openms-thirdparty| image:: https://img.shields.io/conda/dn/bioconda/openms-thirdparty.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-thirdparty
   :alt:   (downloads)
.. |docker_openms-thirdparty| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`openms-thirdparty/tags`: https://quay.io/repository/biocontainers/openms-thirdparty?tab=tags



.. conda:package:: pyopenms

   |downloads_pyopenms| |docker_pyopenms|

   :versions:
      
      

      ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-3``,  ``2.4.0-0``

      

   
   :depends boost: ``>=1.70.0,<1.70.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends coinmp: ``>=1.8.4,<1.9.0a0``
   :depends eigen: ``>=3.3.7,<3.4.0a0``
   :depends glpk: ``>=4.65,<4.66.0a0``
   :depends hdf5: ``>=1.10.5,<1.10.6.0a0``
   :depends hdf5: ``>=1.10.5,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libopenms: ``2.5.0 h463af6b_4``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends libsvm: ``>=3.21,<3.22.0a0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0 *_cpython``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends qt: ``>=5.12.5,<5.13.0a0``
   :depends sqlite: ``>=3.32.3,<4.0a0``
   :depends xerces-c: ``>=3.2.2,<3.2.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyopenms

   and update with::

      conda update pyopenms

   or use the docker container::

      docker pull quay.io/biocontainers/pyopenms:<tag>

   (see `pyopenms/tags`_ for valid values for ``<tag>``)


.. |downloads_pyopenms| image:: https://img.shields.io/conda/dn/bioconda/pyopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopenms
   :alt:   (downloads)
.. |docker_pyopenms| image:: https://quay.io/repository/biocontainers/openms-meta/status
   :target: https://quay.io/repository/biocontainers/openms-meta
.. _`pyopenms/tags`: https://quay.io/repository/biocontainers/pyopenms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openms-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openms-meta/README.html