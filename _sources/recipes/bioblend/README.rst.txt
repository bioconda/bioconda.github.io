:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioblend'
.. highlight: bash

bioblend
========

.. conda:recipe:: bioblend
   :replaces_section_title:
   :noindex:

   A Python library for interacting with the Galaxy API.

   :homepage: https://github.com/galaxyproject/bioblend
   :documentation: https://bioblend.readthedocs.org/
   
   :license: MIT / MIT
   :recipe: /`bioblend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioblend/meta.yaml>`_

   


.. conda:package:: bioblend

   |downloads_bioblend| |docker_bioblend|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.18.0-0</code>,  <code>0.17.0-0</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.8.0-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends requests: ``>=2.20.0``
   :depends requests-toolbelt: ``>=0.5.1,!=0.9.0``
   :depends tuspy: 
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

      mamba install bioblend

   and update with::

      mamba update bioblend

  To create a new environment, run::

      mamba create --name myenvname bioblend

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioblend:<tag>

   (see `bioblend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioblend| image:: https://img.shields.io/conda/dn/bioconda/bioblend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioblend
   :alt:   (downloads)
.. |docker_bioblend| image:: https://quay.io/repository/biocontainers/bioblend/status
   :target: https://quay.io/repository/biocontainers/bioblend
.. _`bioblend/tags`: https://quay.io/repository/biocontainers/bioblend?tab=tags


.. raw:: html

    <script>
        var package = "bioblend";
        var versions = ["1.5.0","1.4.0","1.3.0","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioblend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioblend/README.html