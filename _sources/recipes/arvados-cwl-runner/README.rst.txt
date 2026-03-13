:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arvados-cwl-runner'
.. highlight: bash

arvados-cwl-runner
==================

.. conda:recipe:: arvados-cwl-runner
   :replaces_section_title:
   :noindex:

   Arvados Common Workflow Language runner.

   :homepage: https://arvados.org
   :documentation: https://doc.arvados.org
   
   :developer docs: https://github.com/curoverse/arvados/tree/master/sdk/cwl
   :license: APACHE / Apache-2.0
   :recipe: /`arvados-cwl-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cwl-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cwl-runner/meta.yaml>`_

   


.. conda:package:: arvados-cwl-runner

   |downloads_arvados-cwl-runner| |docker_arvados-cwl-runner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-0</code>,  <code>2.7.0-0</code>,  <code>2.6.3-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3.1-1</code>,  <code>2.0.3.1-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``3.1.2-0``,  ``2.7.0-0``,  ``2.6.3-0``,  ``2.0.4-0``,  ``2.0.3.1-1``,  ``2.0.3.1-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3.20190419203205-0``,  ``1.3.2.20190419203205-0``,  ``1.3.1.20190419203205-0``,  ``1.3.1.20190301150258-0``,  ``1.3.0.20190221150417-0``,  ``1.3.0.20190206223817-0``,  ``1.3.0.20181218191458-0``,  ``1.0.20180216164101-1``,  ``1.0.20180216164101-0``,  ``1.0.20171211211613-0``,  ``1.0.20171010180436-1``,  ``1.0.20171010180436-0``,  ``1.0.20170914161842-0``,  ``1.0.20170414202629-0``,  ``1.0.20170327202303-0``,  ``1.0.20170216151734-0``,  ``1.0.20161230191227-0``,  ``1.0.20161123235904-0``,  ``1.0.20161031135838-0``,  ``1.0.20160715171107-0``,  ``1.0.20160502202716-0``,  ``1.0.20160421150319-0``,  ``1.0.20160411202258-0``,  ``1.0.20160406195023-0``,  ``1.0.20160401183214-0``,  ``1.0.20160318143738-0``,  ``1.0.20160314171956-0``,  ``1.0.20160311144647-0``,  ``1.0.20160323-0``

      
      .. raw:: html

         </details>
      

   
   :depends on arvados-python-client: ``<=3.1.2``
   :depends on ciso8601: ``>=2.0.0``
   :depends on crunchstat-summary: ``<=3.1.2``
   :depends on cwltool: ``3.1.20240508115724``
   :depends on importlib-metadata: ``<5``
   :depends on msgpack-python: ``1.0.3``
   :depends on networkx: ``<2.6``
   :depends on pydot: ``<2``
   :depends on python: ``>=3.8``
   :depends on schema-salad: ``8.5.20240503091721``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install arvados-cwl-runner

to add into an existing workspace instead, run::

    pixi add arvados-cwl-runner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arvados-cwl-runner

Alternatively, to install into a new environment, run::

    conda create -n envname arvados-cwl-runner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arvados-cwl-runner:<tag>

(see `arvados-cwl-runner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arvados-cwl-runner| image:: https://img.shields.io/conda/dn/bioconda/arvados-cwl-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/arvados-cwl-runner
   :alt:   (downloads)
.. |docker_arvados-cwl-runner| image:: https://quay.io/repository/biocontainers/arvados-cwl-runner/status
   :target: https://quay.io/repository/biocontainers/arvados-cwl-runner
.. _`arvados-cwl-runner/tags`: https://quay.io/repository/biocontainers/arvados-cwl-runner?tab=tags


.. raw:: html

    <script>
        var package = "arvados-cwl-runner";
        var versions = ["3.1.2","2.7.0","2.6.3","2.0.4","2.0.3.1"];
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