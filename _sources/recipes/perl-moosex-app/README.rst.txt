:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-app'
.. highlight: bash

perl-moosex-app
===============

.. conda:recipe:: perl-moosex-app
   :replaces_section_title:
   :noindex:

   Write user\-friendly command line apps with even less suffering.

   :homepage: https://metacpan.org/pod/MooseX::App
   :license: perl_5
   :recipe: /`perl-moosex-app <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-app/meta.yaml>`_

   


.. conda:package:: perl-moosex-app

   |downloads_perl-moosex-app| |docker_perl-moosex-app|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3701-2</code>,  <code>1.3701-1</code>,  <code>1.3701-0</code>,  <code>1.43-0</code>,  <code>1.42-0</code>,  <code>1.39-4</code>,  <code>1.39-3</code>,  <code>1.39-2</code>,  <code>1.39-1</code>,  </span></summary>
      

      ``1.3701-2``,  ``1.3701-1``,  ``1.3701-0``,  ``1.43-0``,  ``1.42-0``,  ``1.39-4``,  ``1.39-3``,  ``1.39-2``,  ``1.39-1``,  ``1.39-0``,  ``1.35-2``,  ``1.35-1``,  ``1.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-config-any: 
   :depends on perl-file-homedir: 
   :depends on perl-io-interactive: 
   :depends on perl-moose: 
   :depends on perl-moosex-types-path-class: 
   :depends on perl-path-class: 
   :depends on perl-pod-elemental: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-termreadkey: 

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

    pixi global install perl-moosex-app

to add into an existing workspace instead, run::

    pixi add perl-moosex-app

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-moosex-app

Alternatively, to install into a new environment, run::

    conda create -n envname perl-moosex-app

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-moosex-app:<tag>

(see `perl-moosex-app/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-moosex-app| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-app.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-app
   :alt:   (downloads)
.. |docker_perl-moosex-app| image:: https://quay.io/repository/biocontainers/perl-moosex-app/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-app
.. _`perl-moosex-app/tags`: https://quay.io/repository/biocontainers/perl-moosex-app?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-app";
        var versions = ["1.3701","1.3701","1.3701","1.43","1.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-app/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-app/README.html