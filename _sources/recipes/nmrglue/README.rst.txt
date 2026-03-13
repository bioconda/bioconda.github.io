:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmrglue'
.. highlight: bash

nmrglue
=======

.. conda:recipe:: nmrglue
   :replaces_section_title:
   :noindex:

   A module for working with NMR data in Python

   :homepage: http://www.nmrglue.com
   :license: BSD / BSD-3-Clause
   :recipe: /`nmrglue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrglue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrglue/meta.yaml>`_

   


.. conda:package:: nmrglue

   |downloads_nmrglue| |docker_nmrglue|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9-2</code>,  <code>0.9-1</code>,  <code>0.9-0</code>,  <code>0.8-5</code>,  <code>0.8-3</code>,  <code>0.8-2</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-2</code>,  </span></summary>
      

      ``0.9-2``,  ``0.9-1``,  ``0.9-0``,  ``0.8-5``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``,  ``0.8-0``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.6-0``,  ``0.5-1``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 

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

    pixi global install nmrglue

to add into an existing workspace instead, run::

    pixi add nmrglue

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nmrglue

Alternatively, to install into a new environment, run::

    conda create -n envname nmrglue

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nmrglue:<tag>

(see `nmrglue/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nmrglue| image:: https://img.shields.io/conda/dn/bioconda/nmrglue.svg?style=flat
   :target: https://anaconda.org/bioconda/nmrglue
   :alt:   (downloads)
.. |docker_nmrglue| image:: https://quay.io/repository/biocontainers/nmrglue/status
   :target: https://quay.io/repository/biocontainers/nmrglue
.. _`nmrglue/tags`: https://quay.io/repository/biocontainers/nmrglue?tab=tags


.. raw:: html

    <script>
        var package = "nmrglue";
        var versions = ["0.9","0.9","0.9","0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmrglue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmrglue/README.html