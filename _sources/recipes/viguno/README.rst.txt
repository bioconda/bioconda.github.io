:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viguno'
.. highlight: bash

viguno
======

.. conda:recipe:: viguno
   :replaces_section_title:
   :noindex:

   Lookup OMIM genes and HPO terms and compute similarities.

   :homepage: https://github.com/bihealth/varfish-org
   :license: MIT / MIT
   :recipe: /`viguno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viguno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viguno/meta.yaml>`_

   


.. conda:package:: viguno

   |downloads_viguno| |docker_viguno|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-0``,  ``0.1.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libprotobuf: ``>=5.27.5,<5.27.6.0a0``
   :depends on libsqlite: ``>=3.49.1,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.0,<4.0a0``
   :depends on sqlite: 

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

    pixi global install viguno

to add into an existing workspace instead, run::

    pixi add viguno

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install viguno

Alternatively, to install into a new environment, run::

    conda create -n envname viguno

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/viguno:<tag>

(see `viguno/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_viguno| image:: https://img.shields.io/conda/dn/bioconda/viguno.svg?style=flat
   :target: https://anaconda.org/bioconda/viguno
   :alt:   (downloads)
.. |docker_viguno| image:: https://quay.io/repository/biocontainers/viguno/status
   :target: https://quay.io/repository/biocontainers/viguno
.. _`viguno/tags`: https://quay.io/repository/biocontainers/viguno?tab=tags


.. raw:: html

    <script>
        var package = "viguno";
        var versions = ["0.4.0","0.3.2","0.3.2","0.3.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viguno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viguno/README.html