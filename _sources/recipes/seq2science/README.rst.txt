:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2science'
.. highlight: bash

seq2science
===========

.. conda:recipe:: seq2science
   :replaces_section_title:
   :noindex:

   Automated preprocessing of Next\-Generation\-Sequencing data.

   :homepage: https://vanheeringen-lab.github.io/seq2science
   :developer docs: https://github.com/vanheeringen-lab/seq2science
   :license: MIT / MIT
   :recipe: /`seq2science <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2science>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2science/meta.yaml>`_

   


.. conda:package:: seq2science

   |downloads_seq2science| |docker_seq2science|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``,  ``0.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on argcomplete: ``3.0.5.*``
   :depends on biopython: ``1.81.*``
   :depends on conda: ``24.1.2.*``
   :depends on conda-ecosystem-user-package-isolation: ``1.0.*``
   :depends on filelock: ``3.10.7.*``
   :depends on genomepy: ``0.16.2.*``
   :depends on mamba: ``1.5.9.*``
   :depends on matplotlib-base: ``3.7.1.*``
   :depends on pandas: ``1.5.3.*``
   :depends on pandas_schema: ``0.3.5.*``
   :depends on pysradb: ``2.0.1.*``
   :depends on python: ``3.10.*``
   :depends on pyyaml: ``6.0.*``
   :depends on setuptools: ``60.*``
   :depends on snakemake-minimal: ``7.25.0.*``
   :depends on tabulate: ``0.9.0.*``
   :depends on trackhub: ``0.1.2019.12.24.*``
   :depends on xdg: ``6.0.0.*``

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

    pixi global install seq2science

to add into an existing workspace instead, run::

    pixi add seq2science

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seq2science

Alternatively, to install into a new environment, run::

    conda create -n envname seq2science

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seq2science:<tag>

(see `seq2science/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seq2science| image:: https://img.shields.io/conda/dn/bioconda/seq2science.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2science
   :alt:   (downloads)
.. |docker_seq2science| image:: https://quay.io/repository/biocontainers/seq2science/status
   :target: https://quay.io/repository/biocontainers/seq2science
.. _`seq2science/tags`: https://quay.io/repository/biocontainers/seq2science?tab=tags


.. raw:: html

    <script>
        var package = "seq2science";
        var versions = ["1.2.5","1.2.4","1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2science/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2science/README.html