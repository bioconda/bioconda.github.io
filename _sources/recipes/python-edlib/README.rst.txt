:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-edlib'
.. highlight: bash

python-edlib
============

.. conda:recipe:: python-edlib
   :replaces_section_title:
   :noindex:

   Lightweight\, super fast C\/C\+\+ \(\& Python\) library for sequence alignment using edit \(Levenshtein\) distance.

   :homepage: https://github.com/Martinsos/edlib
   :documentation: https://martinsos.github.io/edlib
   
   :license: MIT / MIT
   :recipe: /`python-edlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-edlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-edlib/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw753`

   


.. conda:package:: python-edlib

   |downloads_python-edlib| |docker_python-edlib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9.post1-3</code>,  <code>1.3.9.post1-2</code>,  <code>1.3.9.post1-1</code>,  <code>1.3.9.post1-0</code>,  <code>1.3.9-8</code>,  <code>1.3.9-7</code>,  <code>1.3.9-6</code>,  <code>1.3.9-5</code>,  <code>1.3.9-4</code>,  </span></summary>
      

      ``1.3.9.post1-3``,  ``1.3.9.post1-2``,  ``1.3.9.post1-1``,  ``1.3.9.post1-0``,  ``1.3.9-8``,  ``1.3.9-7``,  ``1.3.9-6``,  ``1.3.9-5``,  ``1.3.9-4``,  ``1.3.9-3``,  ``1.3.9-2``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8.post2-1``,  ``1.3.8.post2-0``,  ``1.3.8.post1-2``,  ``1.3.8.post1-1``,  ``1.3.8.post1-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.2.4.post1-0``,  ``1.2.4-0``,  ``1.2.3.post1-0``,  ``1.2.3-1``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install python-edlib

to add into an existing workspace instead, run::

    pixi add python-edlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-edlib

Alternatively, to install into a new environment, run::

    conda create -n envname python-edlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-edlib:<tag>

(see `python-edlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-edlib| image:: https://img.shields.io/conda/dn/bioconda/python-edlib.svg?style=flat
   :target: https://anaconda.org/bioconda/python-edlib
   :alt:   (downloads)
.. |docker_python-edlib| image:: https://quay.io/repository/biocontainers/python-edlib/status
   :target: https://quay.io/repository/biocontainers/python-edlib
.. _`python-edlib/tags`: https://quay.io/repository/biocontainers/python-edlib?tab=tags


.. raw:: html

    <script>
        var package = "python-edlib";
        var versions = ["1.3.9.post1","1.3.9.post1","1.3.9.post1","1.3.9.post1","1.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-edlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-edlib/README.html