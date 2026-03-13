:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'py_fasta_validator'
.. highlight: bash

py_fasta_validator
==================

.. conda:recipe:: py_fasta_validator
   :replaces_section_title:
   :noindex:

   Simply and quickly validate a fasta file. Invalid files return non\-zero exit codes

   :homepage: https://github.com/linsalrob/py_fasta_validator
   :license: MIT / MIT
   :recipe: /`py_fasta_validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py_fasta_validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/py_fasta_validator/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.5006657`

   


.. conda:package:: py_fasta_validator

   |downloads_py_fasta_validator| |docker_py_fasta_validator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6-6</code>,  <code>0.6-5</code>,  <code>0.6-4</code>,  <code>0.6-3</code>,  <code>0.6-1</code>,  <code>0.6-0</code>,  <code>0.5-3</code>,  <code>0.5-2</code>,  <code>0.5-1</code>,  </span></summary>
      

      ``0.6-6``,  ``0.6-5``,  ``0.6-4``,  ``0.6-3``,  ``0.6-1``,  ``0.6-0``,  ``0.5-3``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on setuptools: ``>=38.6.0``
   :depends on setuptools_scm: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install py_fasta_validator

to add into an existing workspace instead, run::

    pixi add py_fasta_validator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install py_fasta_validator

Alternatively, to install into a new environment, run::

    conda create -n envname py_fasta_validator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/py_fasta_validator:<tag>

(see `py_fasta_validator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_py_fasta_validator| image:: https://img.shields.io/conda/dn/bioconda/py_fasta_validator.svg?style=flat
   :target: https://anaconda.org/bioconda/py_fasta_validator
   :alt:   (downloads)
.. |docker_py_fasta_validator| image:: https://quay.io/repository/biocontainers/py_fasta_validator/status
   :target: https://quay.io/repository/biocontainers/py_fasta_validator
.. _`py_fasta_validator/tags`: https://quay.io/repository/biocontainers/py_fasta_validator?tab=tags


.. raw:: html

    <script>
        var package = "py_fasta_validator";
        var versions = ["0.6","0.6","0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/py_fasta_validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/py_fasta_validator/README.html