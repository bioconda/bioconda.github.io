:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arvados-cwl-runner'
.. highlight: bash

arvados-cwl-runner
==================

.. conda:recipe:: arvados-cwl-runner
   :replaces_section_title:
   :noindex:

   Arvados Common Workflow Language runner

   :homepage: https://github.com/curoverse/arvados/tree/master/sdk/cwl
   :license: Apache 2.0
   :recipe: /`arvados-cwl-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cwl-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cwl-runner/meta.yaml>`_

   


.. conda:package:: arvados-cwl-runner

   |downloads_arvados-cwl-runner| |docker_arvados-cwl-runner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-0</code>,  <code>2.6.3-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3.1-1</code>,  <code>2.0.3.1-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.7.0-0``,  ``2.6.3-0``,  ``2.0.4-0``,  ``2.0.3.1-1``,  ``2.0.3.1-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3.20190419203205-0``,  ``1.3.2.20190419203205-0``,  ``1.3.1.20190419203205-0``,  ``1.3.1.20190301150258-0``,  ``1.3.0.20190221150417-0``,  ``1.3.0.20190206223817-0``,  ``1.3.0.20181218191458-0``,  ``1.0.20180216164101-1``,  ``1.0.20180216164101-0``,  ``1.0.20171211211613-0``,  ``1.0.20171010180436-1``,  ``1.0.20171010180436-0``,  ``1.0.20170914161842-0``,  ``1.0.20170414202629-0``,  ``1.0.20170327202303-0``,  ``1.0.20170216151734-0``,  ``1.0.20161230191227-0``,  ``1.0.20161123235904-0``,  ``1.0.20161031135838-0``,  ``1.0.20160715171107-0``,  ``1.0.20160502202716-0``,  ``1.0.20160421150319-0``,  ``1.0.20160411202258-0``,  ``1.0.20160406195023-0``,  ``1.0.20160401183214-0``,  ``1.0.20160318143738-0``,  ``1.0.20160314171956-0``,  ``1.0.20160311144647-0``,  ``1.0.20160323-0``

      
      .. raw:: html

         </details>
      

   
   :depends arvados-python-client: ``>=2.6``
   :depends cwltool: ``>=3.1``
   :depends python: 
   :depends ruamel.yaml: ``>=0.15.54``
   :depends schema-salad: ``>=3.0.20181129082112``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install arvados-cwl-runner

   and update with::

      mamba update arvados-cwl-runner

  To create a new environment, run::

      mamba create --name myenvname arvados-cwl-runner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arvados-cwl-runner:<tag>

   (see `arvados-cwl-runner/tags`_ for valid values for ``<tag>``)


.. |downloads_arvados-cwl-runner| image:: https://img.shields.io/conda/dn/bioconda/arvados-cwl-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/arvados-cwl-runner
   :alt:   (downloads)
.. |docker_arvados-cwl-runner| image:: https://quay.io/repository/biocontainers/arvados-cwl-runner/status
   :target: https://quay.io/repository/biocontainers/arvados-cwl-runner
.. _`arvados-cwl-runner/tags`: https://quay.io/repository/biocontainers/arvados-cwl-runner?tab=tags


.. raw:: html

    <script>
        var package = "arvados-cwl-runner";
        var versions = ["2.7.0","2.6.3","2.0.4","2.0.3.1","2.0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-cwl-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-cwl-runner/README.html