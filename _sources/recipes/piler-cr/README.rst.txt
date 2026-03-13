:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piler-cr'
.. highlight: bash

piler-cr
========

.. conda:recipe:: piler-cr
   :replaces_section_title:
   :noindex:

   Identification and analysis of CRISPR repeats.

   :homepage: http://www.drive5.com/pilercr/
   :license: Public Domain
   :recipe: /`piler-cr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler-cr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler-cr/meta.yaml>`_

   


.. conda:package:: piler-cr

   |downloads_piler-cr| |docker_piler-cr|

   :versions:
      
      

      ``1.06-6``,  ``1.06-5``,  ``1.06-4``,  ``1.06-3``,  ``1.06-2``,  ``1.06-1``,  ``1.06-0``

      

   
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

    pixi global install piler-cr

to add into an existing workspace instead, run::

    pixi add piler-cr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install piler-cr

Alternatively, to install into a new environment, run::

    conda create -n envname piler-cr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/piler-cr:<tag>

(see `piler-cr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_piler-cr| image:: https://img.shields.io/conda/dn/bioconda/piler-cr.svg?style=flat
   :target: https://anaconda.org/bioconda/piler-cr
   :alt:   (downloads)
.. |docker_piler-cr| image:: https://quay.io/repository/biocontainers/piler-cr/status
   :target: https://quay.io/repository/biocontainers/piler-cr
.. _`piler-cr/tags`: https://quay.io/repository/biocontainers/piler-cr?tab=tags


.. raw:: html

    <script>
        var package = "piler-cr";
        var versions = ["1.06","1.06","1.06","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piler-cr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piler-cr/README.html