:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'immuneml'
.. highlight: bash

immuneml
========

.. conda:recipe:: immuneml
   :replaces_section_title:
   :noindex:

   immuneML is a software platform for machine learning analysis of immune receptor repertoires.

   :homepage: https://github.com/uio-bmi/immuneML
   :documentation: https://docs.immuneml.uio.no/
   
   :license: AGPL / APGL-3.0-only
   :recipe: /`immuneml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/immuneml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/immuneml/meta.yaml>`_

   


.. conda:package:: immuneml

   |downloads_immuneml| |docker_immuneml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.0-0</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends airr: ``>=1``
   :depends dill: ``>=0.3``
   :depends editdistance: ``0.5.3``
   :depends fishersapi: 
   :depends gensim: ``>=3.8,<4``
   :depends h5py: ``>=2.9.0``
   :depends logomaker: ``>=0.8``
   :depends matplotlib-base: ``>=3.1``
   :depends matplotlib-venn: ``>=0.11``
   :depends numpy: ``>=1.18``
   :depends pandas: ``>=1``
   :depends plotly: ``>=4``
   :depends pystache: ``0.5.4``
   :depends pytest: ``>=4``
   :depends python: ``>=3.7,<3.9``
   :depends pytorch: ``>=1.5.1``
   :depends pyyaml: ``>=5.3``
   :depends regex: 
   :depends requests: ``>=2.21``
   :depends scikit-learn: ``>=0.23``
   :depends scipy: 
   :depends tensorboard: ``1.14.0``
   :depends tqdm: ``>=0.24``
   :depends tzlocal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install immuneml

   and update with::

      conda update immuneml

   or use the docker container::

      docker pull quay.io/biocontainers/immuneml:<tag>

   (see `immuneml/tags`_ for valid values for ``<tag>``)


.. |downloads_immuneml| image:: https://img.shields.io/conda/dn/bioconda/immuneml.svg?style=flat
   :target: https://anaconda.org/bioconda/immuneml
   :alt:   (downloads)
.. |docker_immuneml| image:: https://quay.io/repository/biocontainers/immuneml/status
   :target: https://quay.io/repository/biocontainers/immuneml
.. _`immuneml/tags`: https://quay.io/repository/biocontainers/immuneml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/immuneml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/immuneml/README.html