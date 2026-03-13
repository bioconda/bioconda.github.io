:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rxdock'
.. highlight: bash

rxdock
======

.. conda:recipe:: rxdock
   :replaces_section_title:
   :noindex:

   RxDock is a fork of rDock \(GitLab\)\, a fast\, versatile and open\-source program for docking ligands to proteins and nucleic acids.

   :homepage: https://www.rxdock.org
   :developer docs: https://gitlab.com/rxdock/rxdock
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`rxdock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rxdock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rxdock/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`rxdock_rbdock`

   


.. conda:package:: rxdock

   |downloads_rxdock| |docker_rxdock|

   :versions:
      
      

      ``2013.1.1_148c5bd1-3``,  ``2013.1.1_148c5bd1-1``,  ``2013.1.1_148c5bd1-0``,  ``2013.1.0_b93747f3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: 
   :depends on openbabel: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: 

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

    pixi global install rxdock

to add into an existing workspace instead, run::

    pixi add rxdock

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rxdock

Alternatively, to install into a new environment, run::

    conda create -n envname rxdock

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rxdock:<tag>

(see `rxdock/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rxdock| image:: https://img.shields.io/conda/dn/bioconda/rxdock.svg?style=flat
   :target: https://anaconda.org/bioconda/rxdock
   :alt:   (downloads)
.. |docker_rxdock| image:: https://quay.io/repository/biocontainers/rxdock/status
   :target: https://quay.io/repository/biocontainers/rxdock
.. _`rxdock/tags`: https://quay.io/repository/biocontainers/rxdock?tab=tags


.. raw:: html

    <script>
        var package = "rxdock";
        var versions = ["2013.1.1_148c5bd1","2013.1.1_148c5bd1","2013.1.1_148c5bd1","2013.1.0_b93747f3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rxdock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rxdock/README.html