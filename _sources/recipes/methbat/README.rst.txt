:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methbat'
.. highlight: bash

methbat
=======

.. conda:recipe:: methbat
   :replaces_section_title:
   :noindex:

   A battery of methylation tools for PacBio HiFi reads

   :homepage: https://github.com/PacificBiosciences/MethBat
   :license: BSD-3-Clause-Clear
   :recipe: /`methbat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methbat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methbat/meta.yaml>`_

   


.. conda:package:: methbat

   |downloads_methbat| |docker_methbat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.17.0-0</code>,  <code>0.16.1-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  </span></summary>
      

      ``0.17.0-0``,  ``0.16.1-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install methbat

to add into an existing workspace instead, run::

    pixi add methbat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install methbat

Alternatively, to install into a new environment, run::

    conda create -n envname methbat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/methbat:<tag>

(see `methbat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_methbat| image:: https://img.shields.io/conda/dn/bioconda/methbat.svg?style=flat
   :target: https://anaconda.org/bioconda/methbat
   :alt:   (downloads)
.. |docker_methbat| image:: https://quay.io/repository/biocontainers/methbat/status
   :target: https://quay.io/repository/biocontainers/methbat
.. _`methbat/tags`: https://quay.io/repository/biocontainers/methbat?tab=tags


.. raw:: html

    <script>
        var package = "methbat";
        var versions = ["0.17.0","0.16.1","0.16.0","0.15.0","0.14.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methbat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methbat/README.html