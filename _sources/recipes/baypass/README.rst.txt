:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baypass'
.. highlight: bash

baypass
=======

.. conda:recipe:: baypass
   :replaces_section_title:
   :noindex:

   Genome\-Wide Scan for Adaptive Differentiation and Association Analysis with population\-specific covariables.

   :homepage: https://forge.inrae.fr/mathieu.gautier/baypass_public
   :license: CECILL-B
   :recipe: /`baypass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baypass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baypass/meta.yaml>`_

   


.. conda:package:: baypass

   |downloads_baypass| |docker_baypass|

   :versions:
      
      

      ``3.1-0``,  ``2.31-2``,  ``2.31-1``,  ``2.31-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``

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

    pixi global install baypass

to add into an existing workspace instead, run::

    pixi add baypass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install baypass

Alternatively, to install into a new environment, run::

    conda create -n envname baypass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/baypass:<tag>

(see `baypass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_baypass| image:: https://img.shields.io/conda/dn/bioconda/baypass.svg?style=flat
   :target: https://anaconda.org/bioconda/baypass
   :alt:   (downloads)
.. |docker_baypass| image:: https://quay.io/repository/biocontainers/baypass/status
   :target: https://quay.io/repository/biocontainers/baypass
.. _`baypass/tags`: https://quay.io/repository/biocontainers/baypass?tab=tags


.. raw:: html

    <script>
        var package = "baypass";
        var versions = ["3.1","2.31","2.31","2.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baypass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baypass/README.html