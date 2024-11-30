:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromosight'
.. highlight: bash

chromosight
===========

.. conda:recipe:: chromosight
   :replaces_section_title:
   :noindex:

   Detect loops \(and other patterns\) in Hi\-C contact maps.

   :homepage: https://github.com/koszullab/chromosight
   :license: OTHER / Artistic
   :recipe: /`chromosight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosight/meta.yaml>`_

   


.. conda:package:: chromosight

   |downloads_chromosight| |docker_chromosight|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-0</code>,  <code>1.3.3-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.5-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends cooler: 
   :depends docopt: 
   :depends jsonschema: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends scipy: ``>=1.3``
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

      mamba install chromosight

   and update with::

      mamba update chromosight

  To create a new environment, run::

      mamba create --name myenvname chromosight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromosight:<tag>

   (see `chromosight/tags`_ for valid values for ``<tag>``)


.. |downloads_chromosight| image:: https://img.shields.io/conda/dn/bioconda/chromosight.svg?style=flat
   :target: https://anaconda.org/bioconda/chromosight
   :alt:   (downloads)
.. |docker_chromosight| image:: https://quay.io/repository/biocontainers/chromosight/status
   :target: https://quay.io/repository/biocontainers/chromosight
.. _`chromosight/tags`: https://quay.io/repository/biocontainers/chromosight?tab=tags


.. raw:: html

    <script>
        var package = "chromosight";
        var versions = ["1.6.3","1.6.2","1.6.1","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromosight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromosight/README.html