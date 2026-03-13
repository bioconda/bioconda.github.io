:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libidn'
.. highlight: bash

libidn
======

.. conda:recipe:: libidn
   :replaces_section_title:
   :noindex:

   Library for internationalized domain name support

   :homepage: https://www.gnu.org/software/libidn/
   :license: LGPLv3
   :recipe: /`libidn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libidn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libidn/meta.yaml>`_

   


.. conda:package:: libidn

   |downloads_libidn| |docker_libidn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>7.45.0-10</code>,  <code>7.45.0-9</code>,  <code>7.45.0-8</code>,  <code>7.45.0-7</code>,  <code>7.45.0-6</code>,  <code>7.45.0-5</code>,  <code>7.45.0-4</code>,  <code>7.45.0-3</code>,  <code>7.45.0-2</code>,  </span></summary>
      

      ``7.45.0-10``,  ``7.45.0-9``,  ``7.45.0-8``,  ``7.45.0-7``,  ``7.45.0-6``,  ``7.45.0-5``,  ``7.45.0-4``,  ``7.45.0-3``,  ``7.45.0-2``,  ``7.45.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install libidn

to add into an existing workspace instead, run::

    pixi add libidn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libidn

Alternatively, to install into a new environment, run::

    conda create -n envname libidn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libidn:<tag>

(see `libidn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libidn| image:: https://img.shields.io/conda/dn/bioconda/libidn.svg?style=flat
   :target: https://anaconda.org/bioconda/libidn
   :alt:   (downloads)
.. |docker_libidn| image:: https://quay.io/repository/biocontainers/libidn/status
   :target: https://quay.io/repository/biocontainers/libidn
.. _`libidn/tags`: https://quay.io/repository/biocontainers/libidn?tab=tags


.. raw:: html

    <script>
        var package = "libidn";
        var versions = ["7.45.0","7.45.0","7.45.0","7.45.0","7.45.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libidn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libidn/README.html