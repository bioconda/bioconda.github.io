:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi'
.. highlight: bash

kipoi
=====

.. conda:recipe:: kipoi
   :replaces_section_title:
   :noindex:

   Kipoi\: model zoo for genomics

   :homepage: https://kipoi.org
   :documentation: https://kipoi.org/docs/
   
   :developer docs: https://github.com/kipoi/kipoi
   :license: MIT / MIT
   :recipe: /`kipoi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi/meta.yaml>`_

   Kipoi\: model zoo for genomics.


.. conda:package:: kipoi

   |downloads_kipoi| |docker_kipoi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.6-0</code>,  <code>0.8.5-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.0-0</code>,  </span></summary>
      

      ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.0-0``,  ``0.6.36-0``,  ``0.6.35-0``,  ``0.6.34-0``,  ``0.6.33-0``,  ``0.6.31-0``,  ``0.6.30-0``,  ``0.6.29-0``,  ``0.6.25-1``,  ``0.6.25-0``,  ``0.6.24-1``,  ``0.6.24-0``,  ``0.6.17-0``,  ``0.6.16-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.5-0``,  ``0.6.3-0``,  ``0.6.0-0``,  ``0.5.7-0``,  ``0.3.6-1``,  ``0.3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: ``<=21.4.0``
   :depends colorlog: 
   :depends cookiecutter: ``>=1.6.0``
   :depends deprecation: ``>=2.0.6``
   :depends future: 
   :depends h5py: 
   :depends jinja2: 
   :depends kipoi-conda: ``>=0.1.6``
   :depends kipoi-utils: ``>=0.7.5``
   :depends numpy: 
   :depends pandas: ``>=0.21.0``
   :depends python: 
   :depends pyyaml: 
   :depends related: ``>=0.6.0``
   :depends tinydb: 
   :depends tqdm: 
   :depends urllib3: ``>=1.21.1``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kipoi

   and update with::

      mamba update kipoi

  To create a new environment, run::

      mamba create --name myenvname kipoi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kipoi:<tag>

   (see `kipoi/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoi| image:: https://img.shields.io/conda/dn/bioconda/kipoi.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoi
   :alt:   (downloads)
.. |docker_kipoi| image:: https://quay.io/repository/biocontainers/kipoi/status
   :target: https://quay.io/repository/biocontainers/kipoi
.. _`kipoi/tags`: https://quay.io/repository/biocontainers/kipoi?tab=tags


.. raw:: html

    <script>
        var package = "kipoi";
        var versions = ["0.8.6","0.8.5","0.8.3","0.8.2","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi/README.html